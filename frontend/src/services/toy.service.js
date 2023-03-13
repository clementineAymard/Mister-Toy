import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'

const TOY_KEY = 'toysDB'

export const toyService = {
    query,
    getById,
    remove,
    save,
}

_createToys()
const labels = ['On wheels', 'Box game', 'Art', 'Baby', 'Doll', 'Puzzle', 'Outdoor', 'Battery Powered']

function query() { // { filterBy, sortBy }
    return storageService.query(TOY_KEY)
        .then(toys => {
            //     toys = toys.filter(toy => toy.status === filterBy.status)
            // var regex = new RegExp(filterBy.txt, 'i')
            // toys = toys.filter(toy => regex.test(toy.task))
            // toys = toys.sort((t1, t2) => (t1.createdAt - t2.createdAt) * sortBy.order)
            return toys
        })
}

function getById(id) {
    return storageService.get(TOY_KEY, id)
}

function remove(id) {
    return storageService.remove(TOY_KEY, id)
        .then(() => console.log('service removed toy'))
        .catch(err => {
            console.log('service failed remove toy', err)
            throw err
        })
}

function save(toy) {
    if (toy._id) {
        return storageService.put(TOY_KEY, toy)
    } else {
        return storageService.post(TOY_KEY, toy)
    }
}

// ---------------------------------------------------------------------------------------------------------------------------------------//

function _createToys() {
    var toys = utilService.loadFromStorage(TOY_KEY)
    if (!toys || !toys.length) {
        toys = [
            _createToy('Talking doll', 123, ['Doll', 'Battery Powered', 'Baby']),
            _createToy('Car', 150, ['On wheels', 'Battery Powered']),
            _createToy('Minnie Mouse', 26, ['Baby', 'Doll']),
            _createToy('Barbie head to style', 26, ['Art', 'Doll']),
            _createToy('Horse Puzzle', 40, ['Box game', 'Puzzle']),
            _createToy('Football Ball', 50, ['Outdoor']),
            _createToy('Stick paint', 25, ['Art']),
            _createToy('Wax Crayons', 45, ['Art', 'Baby']),
            _createToy('Car circuit', 45, ['Box game', 'Battery Powered', 'On wheels']),
            _createToy('Kapla blocks', 45, ['Box game']),
        ]
        utilService.saveToStorage(TOY_KEY, toys)
    }
    return toys
}

function _createToy(name, price, labels) {
    return {
        _id: utilService.makeId(),
        name,
        price,
        labels,
        createdAt: Date.now(),
        inStock: true,
    }
}


function getEmptyToy() {
    return {
        _id: '',
        name: '',
        price: '',
        labels: [],
        createdAt: '',
        inStock: '',
    }
}