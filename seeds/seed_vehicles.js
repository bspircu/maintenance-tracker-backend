exports.seed = async function(knex) {
  // Deletes ALL existing entries
  const [trevor, bryan, justin] = await knex.select().table("users");
  return knex("vehicles")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("vehicles").insert([
        { year: 2006, make: "hyundai", model: "sonata", owner_id: trevor.id },
        { year: 2006, make: "toyota", model: "4runner", owner_id: bryan.id },
        { year: 2017, make: "mazda", model: "cx-5", owner_id: justin.id }
      ]);
    });
};
