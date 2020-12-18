module.exports = router => {
  require('./routes/books')(router);

  return router;
};