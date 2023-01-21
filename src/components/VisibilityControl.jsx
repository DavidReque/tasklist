export const VisibilityControl = ({isChecked, setShowCompleted, cleanTasks}) => {
    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete it')) {
            cleanTasks()
        }
    }
  return (
    <div>
        <input
        className="mx-1"
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setShowCompleted(e.target.checked)}
        />{" "}
        <label>Show task done</label>

        <button
          className="mx-2 my-3 py-3 px-5 rounded-lg bg-red-600 text-white
          hover:bg-red-300 hover:text-black"
          onClick={handleDelete}>
            Clear
        </button>

      </div>
  )
}
