const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  try {
    if (request.query.limit && request.query.maxPrice) {
      const limit = request.query.limit;
      const maxPrice = request.query.maxPrice;
      const limitedMeals = await knex("meals")
        .where("price", "<=", maxPrice)
        .limit(limit);

      response.json(limitedMeals);
    } else if (request.query.availableReservations) {
      const availableReservations = request.query.availableReservations;
      const cheapMeal = await knex("meals").where("max_reservations", ">", 0);
    } else if (request.query.title) {
      const title = request.query.title;
      const matchingTitles = await knex("meals").where(
        "title",
        "like",
        `%${title}%`
      );
      response.json(matchingTitles);
    } else if (request.query.createdAfter) {
      const createdAfter = request.query.createdAfter;
      const datescreatedAfter = await knex("meals").where(
        "created_date",
        ">",
        createdAfter
      );
      response.json(datescreatedAfter);
    } else if (request.query.maxPrice) {
      const maxPrice = request.query.maxPrice;
      const cheapMeal = await knex("meals").where("price", "<", maxPrice);

      response.json(cheapMeal);
    } else if (request.query.limit) {
      const limit = request.query.limit;
      const limitedMeals = await knex("meals").limit(limit);
      response.json(limitedMeals);
    } else {
      const titles = await knex("meals").select("*");
      response.json(titles);
    }
  } catch (error) {
    throw error;
  }
});

//post a meal
router.post("/", async (request, response) => {
  try {
    const meal = await knex("meals").insert(request.body);
    response.json(request.body);
  } catch (error) {
    throw error;
  }
});

//get meal by id
router.get("/:id", async (request, response) => {
  try {
    const titles = await knex("meals").where("id", request.params.id);
    response.json(titles);
  } catch (error) {
    throw error;
  }
});

//update meal by id
router.put("/:id", async (request, response) => {
  try {
    const meal = await knex("meals")
      .where("id", request.params.id)
      .update(request.body);
    response.json(meal);
  } catch (error) {
    throw error;
  }
});

//delete meal by id but not working:)
router.delete("/:id", async (request, response) => {
  try {
    const meal = await knex("meals").where("id", request.params.id).del();
    response.json(meal);
  } catch (error) {
    throw error;
  }
});

router.get("/:id", async (request, response) => {
  try {
    const titles = await knex("meals").where("id", request.params.id);
    response.json(titles);
  } catch (error) {
    throw error;
  }
});

module.exports = router;
