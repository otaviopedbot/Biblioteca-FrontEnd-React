import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';

//componentes:
import Card from '../../components/Card'
import Check from '../../components/buttons/Check'
import Return from '../../components/buttons/Return'


const EditAuthors = () => {

  const { id } = useParams();


  const editAuthor = (e) => {
    e.preventDefault()
    console.log('teste')
  }

  const [name, setName] = useState("")


  return (
    <div>

      <Card title={'Editar Autor'}>


        <form onSubmit={editAuthor}>

          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Nome' />
          </div>

          <Check />

          <Link to={'/authors/'+id}>
            <Return />
          </Link>

        </form>


      </Card>

    </div>
  )
}

export default EditAuthors