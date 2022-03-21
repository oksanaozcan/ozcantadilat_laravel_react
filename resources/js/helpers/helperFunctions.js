import htmlToDraft from 'html-to-draftjs';
import { ContentState  } from 'draft-js';

function getFields (array) {
  let output = [];
  array.map(item => {
    output.push(item.id)
  })
  return output;
}

function createStateToDraft (string) {
  const blocksFromHtml = htmlToDraft(string);
  const { contentBlocks, entityMap } = blocksFromHtml;
  return ContentState.createFromBlockArray(contentBlocks, entityMap);     
}

function getPreviewImage (array) {
  if (array.length <= 1) {
    console.log('<=1 file')
    return null
  } else {
    return array[array.length - 1];        
  }
}

export {getFields, createStateToDraft, getPreviewImage};