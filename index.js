const express = require("express");
const app = express();
app.use(express.json());

// --- constants (YOUR details) ---
const USER_ID = "renjith_anil_06092004";   // full_name_ddmmyyyy, lowercase
const EMAIL = "renjithaniltvm@gmail.com";
const ROLL_NUMBER = "22BAI1050";

// helper: alternating caps (start UPPER) on reversed string
function reverseAltCapsFromAlphaOnlyTokens(tokens) {
  const joined = tokens.join("");                 // keep original case
  const rev = joined.split("").reverse();
  return rev.map((ch, i) => (i % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase())).join("");
}

app.post("/bfhl", (req, res) => {
  try {
    const data = Array.isArray(req.body?.data) ? req.body.data : null;
    if (!data) {
      return res.status(400).json({
        is_success: false,
        user_id: USER_ID,
        email: EMAIL,
        roll_number: ROLL_NUMBER,
        message: "Invalid input. Expected JSON: { \"data\": [ ... ] }"
      });
    }

    const even = [];
    const odd = [];
    const alphabets = [];
    const special = [];
    let sum = 0;

    for (const item of data) {
      const str = String(item); // ensure string checks work

      if (/^-?\d+$/.test(str)) {
        // integer (incl. negative); keep as string in output
        const num = parseInt(str, 10);
        (num % 2 === 0 ? even : odd).push(str);
        sum += num;
      } else if (/^[a-zA-Z]+$/.test(str)) {
        // purely alphabetic token
        alphabets.push(str.toUpperCase());
      } else {
        // anything else (symbols, mixed, decimals, spaces, etc.)
        special.push(str);
      }
    }

    // concat_string built from *alphabetic tokens only*, preserving original case
    const alphaOriginalTokens = data.filter(x => /^[a-zA-Z]+$/.test(String(x))).map(String);
    const concat = reverseAltCapsFromAlphaOnlyTokens(alphaOriginalTokens);

    return res.status(200).json({
      is_success: true,
      user_id: USER_ID,
      email: EMAIL,
      roll_number: ROLL_NUMBER,
      odd_numbers: odd,                 // numbers as strings
      even_numbers: even,               // numbers as strings
      alphabets: alphabets,             // uppercased tokens
      special_characters: special,      // as-is
      sum: String(sum),                 // sum returned as string
      concat_string: concat
    });
  } catch (err) {
    return res.status(500).json({
      is_success: false,
      user_id: USER_ID,
      email: EMAIL,
      roll_number: ROLL_NUMBER,
      error: err.message || "Internal Server Error"
    });
  }
});

// Optional: a health check route (handy on Render)
app.get("/", (_req, res) => {
  res.status(200).send("BFHL API up. POST /bfhl");
});

// IMPORTANT: Render provides PORT via env var
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on :${PORT}`));
