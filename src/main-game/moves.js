
export const moveSurvivorToLocation = (G, ctx, id, ...rest) => {
  console.log('id', id); // @todo: remove this
  const locations = [...G.locations];
  // remove player from other locations
  locations.map((l) => {
    console.log('l', l); // @todo: remove this
    const survivorIdx = l.survivors.indexOf(ctx.currentPlayer);
    // @todo: fix this removal from other locations or redefine movement
    //   maybe it could be an action happening to one survivor from one
    //   location to another one, so the event cards could trigger
    //   automatically and it's only matter to the survivor's owner to
    //   decide what to do about the event stated in the event card.

    // if location has currentplayer into it's survivor list remove it
    return ({
      ...l,
      survivors: survivorIdx > -1
        ? [
          ...l.survivors.slice(0, survivorIdx),
          ...l.survivors.slice(survivorIdx + 1),
        ] : l.survivorss,
    });
  });
  locations[id].survivors = locations[id].survivors.indexOf(ctx.currentPlayer) < 0
    ? locations[id].survivors.concat(ctx.currentPlayer)
    : locations[id].survivors;
  return { ...G, locations }; // don't mutate original state.
};

export default moveSurvivorToLocation;
