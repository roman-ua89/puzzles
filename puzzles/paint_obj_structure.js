
const structureObj = {
  name: 'first element',
  children: [
    { name: 'mentour.js' },
    { name: 'community.json' },
    {
      name: 'images',
      children: [
        {name: 'logo.png' },
        {
          children: [
            { name: 'backgrofund.svb' },
            { name: 'dfsd.png' }
          ]
        }
      ]
    },
    { name: 'channel.js' }
  ]
}

function paintStructure(structure, lvl = -1) {
  let result = '';

  if (typeof structure !== 'object') {
    return result += '.'.repeat(lvl) + structure + "\n";
  }

  Object.values(structure).forEach(item => {
    if (typeof item === 'string') {
      result += paintStructure(item, lvl+1);
    } else if (Array.isArray(item)) {
      item.forEach(child => {
        result += paintStructure(child, lvl+1);
      })
    }
  })

  return result;

}

const paintedStructure = paintStructure(structureObj);
console.log(paintedStructure)
