export function selectBook(book) {
    // selectBook is an ActionCreator, and needs to return an action,
    // an object with a type property
    return {
        type: 'BOOK_SELECTED', // always contains a type
        payload: book // optional
    }
}
