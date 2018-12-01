const maxId = 10e6;
const minId = 1;

function stockRandomId(context, event, done) {
  context.vars.stockId = Math.floor(Math.random() * (maxId - minId + 1)) + minId;
  return done();
}

module.exports = {
  stockRandomId,
};

