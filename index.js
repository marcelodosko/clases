var _ = require('lodash')
const filter = require('./filters')

var users = [
  { 'name': 'uno', 'age': 36, 'active': true },
  { 'name': 'dos',   'age': 40, 'active': false },
  { 'name': 'tres', 'age': 50, 'active': true },
  { 'name': 'cuatro',   'age': 55, 'active': false },
  { 'name': 'cinco', 'age': 23, 'active': true },
  { 'name': 'seis',   'age': 12, 'active': false }
]

var usersFilter = _.map(_.filter(users, filter.filterAge), 'age')

console.log(usersFilter)
