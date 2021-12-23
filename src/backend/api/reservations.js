const express = require("express");
const router = express.Router();
const knex = require("../database");

//get all reservations 
router.get("/", async (request, response) => {
    try {
      const reservations = await knex("reservations").select("*");
      response.json(reservations);
    } catch (error) {
      throw error;
    }
  });
//post new reservation
  router.post("/", async (request, response) => {
    try {
      const reservations = await knex("reservations").insert(request.body);
      response.json(request.body);
    } catch (error) {
      throw error;
    }
  });

  //get reservation by id

  router.get("/:id", async (request, response) => {
    try {
      const reservations = await knex("reservations").where("id",request.params.id);
      response.json(reservations);
    } catch (error) {
      throw error;
    }
  });

 //update reservaton by id

 router.put("/:id", async (request, response) => {
    try {
      const reservations = await knex("reservations").where("id",request.params.id).update(request.body);
      response.json(reservations);
    } catch (error) {
      throw error;
    }
  });

  //delete reservation by id

  router.delete("/:id", async (request, response) => {
    try {
      const reservations = await knex("reservations").where("id",request.params.id).del();
      response.json(reservations);
    } catch (error) {
      throw error;
    }
  });
module.exports = router;
