exports.seed = async function(knex) {
  const table = knex("manufacturers");
  await table.del();
  await table.insert([
    { name: "Hyundai" },
    { name: "Toyota" },
    { name: "Mazda" }
  ]);
};
