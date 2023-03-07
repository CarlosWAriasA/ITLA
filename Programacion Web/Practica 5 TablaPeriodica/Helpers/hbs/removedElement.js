const removedElement = function (element) {
  if (element.symbol === "false") {
    return true;
  } else {
    return false;
  }

}

exports.removedElement = removedElement;