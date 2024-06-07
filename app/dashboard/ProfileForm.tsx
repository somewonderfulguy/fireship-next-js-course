'use client'

import { FormEvent } from 'react'

const ProfileForm = ({ user }: any) => {
  const updateUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    const body = {
      name: formData.get('name'),
      bio: formData.get('bio'),
      age: formData.get('age'),
      image: formData.get('image')
    }

    const res = await fetch('/api/user', {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  return (
    <div>
      <h2>Edit Your Profile</h2>
      <form onSubmit={updateUser}>
        <div style={{ marginBottom: 30, display: 'flex', gap: 5 }}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" defaultValue={user?.name ?? ''} />
        </div>
        <label htmlFor="bio"></label>
        <div style={{ marginBottom: 30, display: 'flex', gap: 5 }}>
          <textarea
            name="bio"
            defaultValue={user?.bio ?? ''}
            cols={30}
            rows={10}
          />
        </div>
        <div style={{ marginBottom: 30, display: 'flex', gap: 5 }}>
          <label htmlFor="age">Age</label>
          <input type="text" name="age" defaultValue={user?.age ?? 0} />
        </div>
        <div style={{ marginBottom: 30, display: 'flex', gap: 5 }}>
          <label htmlFor="image">Profile Image URL</label>
          <input type="text" name="image" defaultValue={user?.image ?? ''} />
        </div>

        <button type="submit">Save</button>
      </form>
    </div>
  )
}

export default ProfileForm
