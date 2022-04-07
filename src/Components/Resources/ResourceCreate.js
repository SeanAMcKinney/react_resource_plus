import React from 'react'
import ResourceForm from './ResourceForm'

export default function ResourceCreate(props) {
  return (
    <article className='creatResource m-2 text-white justify-content-center'>
        <ResourceForm 
            setShowCreate={props.setShowCreate}
            getResources={props.getResources}
        />
    </article>
  )
}
