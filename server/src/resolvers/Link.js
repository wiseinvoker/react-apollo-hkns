function postedBy(parent, args, context) {
  return context.prisma.link
    .findUnique({ where: { id: parent.id } })
    .User();
}

function votes(parent, args, context) {
  return context.prisma.link
    .findUnique({ where: { id: parent.id } })
    .Vote();
}

module.exports = {
  postedBy,
  votes
};
