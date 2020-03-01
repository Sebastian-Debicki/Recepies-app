
export const sort = (recepies, optionSortBy, optionIncDec) => {
  if (optionIncDec === 'Increasing') {
    recepies.sort((a, b) => {
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
          if (Number(a.calories) < Number(b.calories)) return -1
          if (Number(a.calories) > Number(b.calories)) return 1
          return 0
        }
        default: return recepies
      }
    })
  } else if (optionIncDec === 'Decreasing') {
    recepies.sort((a, b) => {
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
          if (Number(a.calories) < Number(b.calories)) return 1
          if (Number(a.calories) > Number(b.calories)) return -1
          return 0
        }
        default: return recepies
      }
    })
  }
  return recepies;
}