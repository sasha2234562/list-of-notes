import {v1} from "uuid";

const initialState = [
    {
        listName: "What to learn",
        listId: v1(),
        notes: [
            {id: v1(), important: true, title: "Good", tags: []},
            {id: v1(), important: false, title: "Go#od", tags: []},
            {id: v1(), important: true, title: "Good", tags: []},
            {id: v1(), important: false, title: "Good#", tags: []},
        ]
    }
]
export const notesReduser = (state = initialState, action) => {
    switch (action.type) {
        case "add-list": {
            debugger
            return [{
                listName: action.title,
                listId: v1(),
                notes: []
            }, ...state]
        }
        case "add-note": {
            return state.map(l => l.listId === action.listId ? {
                ...l,
                notes: [{id: v1(), important: false, title: action.title, tags: action.tags}, ...l.notes]
            } : l)
        }
        case "update-note": {
            return state.map(l => l.listId === action.listId ? {
                ...l,
                notes: l.notes.map(n => n.id === action.noteId ? {...n, title: action.newTitle, tags: action.tags} : n)
            } : l)
        }
        case "delete-note": {
            return state.map(l => l.listId === action.listId ? {
                ...l,
                notes: l.notes.filter(n => n.id !== action.idNote)
            } : l)
        }
        case "update-list-name": {
            return state.map(l => l.listId === action.listId ? {...l, listName: action.newListName} : l)
        }
        case "pick-out-note": {
            return state.map(l => l.listId === action.listId ? {
                ...l,
                notes: l.notes.map(n => n.id === action.noteId ? {...n, important: !n.important} : n)
            } : l)
        }
        default:
            return state
    }
}
export const pickOutNote = (listId, noteId, important) => ({type: "pick-out-note", listId, noteId, important})
export const addList = (title) => ({type: "add-list", title})
export const addNote = (title, listId, tags) => ({type: "add-note", title, listId, tags})
export const updateNote = (newTitle, listId, noteId,tags) => ({type: "update-note", newTitle, listId, noteId,tags})
export const updateListName = (newListName, listId) => ({type: "update-list-name", newListName, listId})
export const deleteNote = (listId, idNote) => ({type: "delete-note", listId, idNote})