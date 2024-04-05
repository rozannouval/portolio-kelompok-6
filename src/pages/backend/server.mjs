import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import routeData from "./routes/routeData.mjs";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const responseHTML = `
        <html>
            <body>
              <div>
                <h1>Kamu berhasil bukan aku ༼ つ ◕_◕ ༽つ <br> LAntas? (⌐■_■)</h1>
                <a href="/api/anggota">
                    <button>Ke Halaman api/data</button>
                </a>
              </div>
            </body>
        </html>
    `;
  res.send(responseHTML);
});

// Use CORS
app.use(cors());

// Use Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Route for handling data
app.use("/api/anggota", routeData);

// Start the server
app.listen(port, () => {
  console.log(`App is running at http://localhost:${port}`);
});
