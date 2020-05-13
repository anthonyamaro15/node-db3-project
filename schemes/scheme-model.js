const db = require("../data/config-db");

function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes").where({ id }).first();
}

function findSteps(id) {
  return db("schemes as sc")
    .join("steps as s", "sc.id", "s.scheme_id")
    .where("s.scheme_id", id);
  // select *
  //    from schemes as sc
  // join steps as s
  // on sc.id = s.scheme_id
  // where s.scheme_id = 1;
}

function add(scheme) {
  return db("schemes").insert(scheme, "id");
}

async function addStep(step, scheme_id) {
  const obj = { ...step, scheme_id };
  return db("steps").insert(obj, "id");
}

async function update(changes, idd) {
  const [id] = await db("schemes").where({ id: idd });

  return db("schemes").update(changes, id);
}

function remove(id) {
  return db("schemes").where({ id }).del();
}
module.exports = {
  find,
  findById,
  findSteps,
  add,
  addStep,
  update,
  remove,
};
