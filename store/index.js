export const state = () => ({
  counters: [
  ],
  filterType: 0,
  minQtyFilter: null,
  maxQtyFilter: null,
  createModalActive: false,
  searchFilter: ''
})

export const getters = {
  getCountersTotal(state) {
    return state.counters.reduce(
      (previousValue, currentValue) => previousValue + parseInt(currentValue.qty),
      0
    )
  },
  getFilteredList(state) {
    let searchFilter = state.counters.filter(
      (counter) => (counter.title.toUpperCase()).includes(state.searchFilter.toUpperCase())
    )

    let qtyFilter

    if (state.maxQtyFilter) {
      qtyFilter = searchFilter.filter(
        (counter) => counter.qty <= state.maxQtyFilter && counter.qty >= state.minQtyFilter
      )
    } else {
      qtyFilter = searchFilter.filter(
        (counter) => counter.qty >= state.minQtyFilter
      )
    }

    switch (state.filterType) {
      case '1':
        //Ascendant alphabetical
        return qtyFilter.sort(
          (previousValue, currentValue) => {
            let UpperPrev = previousValue.title.toUpperCase()
            let UpperNext = currentValue.title.toUpperCase()
            return (UpperPrev < UpperNext) ? -1 : (UpperPrev > UpperNext) ?  1  : 0
          }
        )
      case '2':
        //Descendant alphabetical
        return qtyFilter.sort(
          (previousValue, currentValue) => {
            let UpperPrev = previousValue.title.toUpperCase()
            let UpperNext = currentValue.title.toUpperCase()
            return (UpperNext < UpperPrev) ? -1 : (UpperNext > UpperPrev) ?  1  : 0
          }
        )
      case '3':
        //Ascendant numeric
        return qtyFilter.sort(
          (previousValue, currentValue) => {
            let ValuePrev = previousValue.qty
            let ValueNext = currentValue.qty
            return (ValueNext < ValuePrev) ? -1 : (ValueNext > ValuePrev) ?  1  : 0
          }
        )
      case '4':
        //Descendant numeric
        return qtyFilter.sort(
          (previousValue, currentValue) => {
            let ValuePrev = previousValue.qty
            let ValueNext = currentValue.qty
            return (ValuePrev < ValueNext) ? -1 : (ValuePrev > ValueNext) ?  1  : 0
          }
        )
      default:
        //Whitout filter
        return qtyFilter
    }
  }
}

export const mutations = {
  increment(state, item) {
    let stateElement = state.counters.findIndex((obj => obj.id === item.id))
    state.counters[stateElement].qty = state.counters[stateElement].qty + 1
  },
  decrease(state, item) {
    let stateElement = state.counters.findIndex((obj => obj.id === item.id))
    state.counters[stateElement].qty = state.counters[stateElement].qty - 1
  },
  setMinQtyFilter(state, value) {
    sessionStorage.setItem('minQtyFilter', value)
    state.minQtyFilter = value
  },
  setMaxQtyFilter(state, value) {
    sessionStorage.setItem('maxQtyFilter', value)
    state.maxQtyFilter = value
  },
  setTypeFilter(state, value) {
    sessionStorage.setItem('filterType', value)
    state.filterType = value
  },
  setSearchFilter(state, value) {
    sessionStorage.setItem('searchFilter', value)
    state.searchFilter = value
  },
  deleteCounter(state, item) {
    state.counters = state.counters.filter(
      counter => counter.id !== item.id
    )
  },
  createCounter(state, counter) {
    if (state.counters.length >= 1) {
      counter.id = state.counters[state.counters.length - 1].id + 1
    } else {
      counter.id = 0
    }
    state.counters.push(counter)
  },
  toggleModalActiveState(state) {
    state.createModalActive = !state.createModalActive
  }
}