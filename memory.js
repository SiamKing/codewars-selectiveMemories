function select(memory){

  memory = memory.split(', ');
  let enemies = [],
      index = 0;
  memory.forEach(mem => {
    if (mem.startsWith('!')) {
      if (memory[index + 1] !== undefined && memory[index + 1].startsWith("!")) {
        enemies.push(memory[index + 2]);
      }
      enemies.push(mem.slice());
      enemies.push(mem.slice(1, mem.length));
      enemies.push(memory[index + 1]);
    }
    index++;
  });

  if (enemies === []) { return memory.join(', ') };

  let friends = [];
  memory.forEach(name => enemies.includes(name) ? false : friends.push(name));

  return friends.join(', ');

}
