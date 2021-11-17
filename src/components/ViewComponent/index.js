import {MdDeleteOutline} from 'react-icons/md'
import {BiEdit} from 'react-icons/bi'
import './index.css'

const ViewUsers = props => {
  const {
    userDetails,
    editUserItem,
    deleteSingleUserItem,
    toggleCheckbox,
  } = props

  const onClickingCheckbox = () => {
    toggleCheckbox(userDetails.id)
  }

  const onClickingEdit = () => {
    editUserItem(userDetails.id)
  }

  const onClickingDelete = () => {
    deleteSingleUserItem(userDetails.id)
  }

  return (
    <tr className={userDetails.select && 'selected'}>
      <td>
        <input
          type="checkbox"
          checked={userDetails.select}
          onChange={onClickingCheckbox}
        />
      </td>
      <td>{userDetails.name}</td>
      <td>{userDetails.email}</td>
      <td>{userDetails.role}</td>
      <td>
        <button
          type="button"
          className="action-button"
          onClick={onClickingDelete}
        >
          <MdDeleteOutline className="delete-icon"/>
        </button>
        <button
          className="action-button"
          type="button"
          onClick={onClickingEdit}
        >
          <BiEdit className="edit-icon"/>
        </button>
      </td>
    </tr>
  )
}

export default ViewUsers
