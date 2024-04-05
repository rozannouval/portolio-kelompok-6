//import express validator
import { validationResult } from "express-validator";
//require connection
import connection from "../config/database.js";

const index =
  ("/",
  function (req, res) {
    //query
    connection.query(
      "SELECT * FROM card_anggota ORDER BY id desc",
      function (err, rows) {
        if (err) {
          return res.status(500).json({
            status: false,
            message: "gak gitu caranya!!",
          });
        } else {
          return res.status(200).json({
            status: true,
            message:
              "Anda melakukannya dengan baik sehingga dapat mengakses tabel card_anggota",
            data: rows,
          });
        }
      }
    );
  });

function showAnggota(req, res) {
  let id = req.params.id;

  connection.query(
    `SELECT * FROM card_anggota WHERE id = ${id}`,
    function (err, rows) {
      if (err) {
        return res.status(500).json({
          status: false,
          message: "Internal Server Error",
        });
      }

      // if post not found
      if (rows.length <= 0) {
        return res.status(404).json({
          status: false,
          message: "Data Postingan tidak ditemukan",
        });
      }
      // if post found
      else {
        return res.status(200).json({
          status: true,
          message: "Detail Data Postingan",
          data: rows[0],
        });
      }
    }
  );
}

function tambahAnggota(req, res) {
  const validationreq = validationResult(req);

  if (!validationreq.isEmpty()) {
    return res.status(422).json({
      validationreq: validationreq.array(),
    });
  }

  //define formData
  let formData = {
    title: req.body.title,
    content: req.body.content,
  };

  // insert query
  connection.query(
    "INSERT INTO card_anggota SET ?",
    formData,
    function (err, rows) {
      //if(err) throw err
      if (err) {
        return res.status(500).json({
          status: false,
          message: "Internal Server Error",
        });
      } else {
        return res.status(201).json({
          status: true,
          message:
            "insert data anda sudah benar, silahkan lihat kembali halaman http:localhost:3000/api/posts (GET) anda akan melihat data terbaru",
          data: rows[0],
        });
      }
    }
  );
}

function updateAnggota(req, res) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      errors: errors.array(),
    });
  }

  //id post
  let id = req.params.id;

  //data post
  let formData = {
    title: req.body.title,
    content: req.body.content,
  };

  // update query
  connection.query(
    `UPDATE card_anggota SET ? WHERE id = ${id}`,
    formData,
    function (err, rows) {
      //if(err) throw err
      if (err) {
        return res.status(500).json({
          status: false,
          message: "Internal Server Error",
        });
      } else {
        return res.status(200).json({
          status: true,
          message:
            "Data berhasil di update! Silahkan cek kembali database anda",
        });
      }
    }
  );
}

function deleteAnggota(req, res) {
  let id = req.params.id;

  connection.query(
    `DELETE FROM card_anggota WHERE id = ${id}`,
    function (err, rows) {
      //if(err) throw err
      if (err) {
        return res.status(500).json({
          status: false,
          message: "Internal Server Error",
        });
      } else {
        return res.status(200).json({
          status: true,
          message: "Data berhasil di DELETE! silahkan cek kembali database",
        });
      }
    }
  );
}

export { index, showAnggota, updateAnggota, tambahAnggota, deleteAnggota };
