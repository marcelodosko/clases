

var isActive = function(user) {
  return user.active
}

var isInactive = function(user) {
  return !user.active
}

var filterAge = function(user) {
  return !!(user.age < 45)
}

var filterName = function(user) {
  return !!(user.name.length > 4)
}

module.exports = {
  isActive: isActive,
  isInactive: isInactive,
  filterAge: filterAge,
  filterName: filterName
}
