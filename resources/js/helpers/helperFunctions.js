
function getFields (array) {
  let output = [];
  array.map(item => {
    output.push(item.id)
  })
  return output;
}

export {getFields};