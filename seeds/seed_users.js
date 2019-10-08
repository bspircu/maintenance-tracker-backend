exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        { first_name: "Trevor", last_name: "Scheer" },
        { first_name: "Bryan", last_name: "Spircu" },
        { first_name: "Justin", last_name: "Fisse" }
      ]);
    });
};
