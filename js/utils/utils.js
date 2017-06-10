function InitializeUIElements(uiTable, root)
{
  for (var element in uiTable) {
    if (root === undefined) {
      uiTable[element] = $(uiTable[element]);
    } else {
      uiTable[element] = root.find(uiTable[element]);
    }
  }
}