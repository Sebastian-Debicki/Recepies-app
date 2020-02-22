
export const sort = (values, optionSortBy, optionIncDec) => {
  if (optionIncDec === 'Increasing') {
    values.sort((a, b) => {
      switch (optionSortBy) {
        case 'Last modification date': {
          if (a.modificationDate < b.modificationDate) return 1
          if (a.modificationDate > b.modificationDate) return -1
          return 0
        }
        case 'Added date': {
          if (a.addedDate < b.addedDate) return 1
          if (a.addedDate > b.addedDate) return -1
          return 0
        }
        case 'Name': {
          if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
          if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
          return 0
        }
        case 'Calories': {
          if (a.calories < b.calories) return -1
          if (a.calories > b.calories) return 1
          return 0
        }
        default: return values
      }
    })
  } else if (optionIncDec === 'Decreasing') {
    values.sort((a, b) => {
      switch (optionSortBy) {
        case 'Last modification date': {
          if (a.modificationDate < b.modificationDate) return -1
          if (a.modificationDate > b.modificationDate) return 1
          return 0
        }
        case 'Added date': {
          if (a.addedDate < b.addedDate) return -1
          if (a.addedDate > b.addedDate) return 1
          return 0
        }
        case 'Name': {
          if (a.name.toLowerCase() < b.name.toLowerCase()) return 1
          if (a.name.toLowerCase() > b.name.toLowerCase()) return -1
          return 0
        }
        case 'Calories': {
          if (a.calories < b.calories) return 1
          if (a.calories > b.calories) return -1
          return 0
        }
        default: return values
      }
    })
  }
  return values;
}