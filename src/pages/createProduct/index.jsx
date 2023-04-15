import React from 'react'
import { useFormik } from 'formik'
import styles from './createProduct.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { createProduct } from '../../store/createProduct/createProductSlice'
import { object, string } from 'yup'

const initialValues = {
  title: '',
  author: '',
  createdAt: '',
  rating: '',
}

const validationSchema = object({
  title: string().required('Required'),
  author: string().required('Required'),
  createdAt: string().required('Required'),
  rating: string().required('Required'),
})

const CreateProduct = () => {
  const onSubmit = values => {
    dispatch(createProduct(values))
  }

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  })

  const dispatch = useDispatch()
  const { product } = useSelector(state => state.createProduct)

  return (
    <div>
      <form className={styles.container} onSubmit={formik.handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          className={styles.input}
          type="text"
          name="title"
          value={formik.values.title}
          onChange={formik.handleChange}
        />
        {formik.errors.title ? (
          <div style={{ color: 'red' }}>{formik.errors.title}</div>
        ) : null}

        <label htmlFor="author">Author</label>
        <input
          className={styles.input}
          type="text"
          name="author"
          value={formik.values.author}
          onChange={formik.handleChange}
        />

        {formik.errors.author ? (
          <div style={{ color: 'red' }}>{formik.errors.author}</div>
        ) : null}

        <label htmlFor="createdAt">Created at:</label>
        <input
          className={styles.input}
          type="text"
          name="createdAt"
          value={formik.values.createdAt}
          onChange={formik.handleChange}
        />

        {formik.errors.createdAt ? (
          <div style={{ color: 'red' }}>{formik.errors.createdAt}</div>
        ) : null}

        <label htmlFor="rating">Rating:</label>
        <input
          className={styles.input}
          type="text"
          name="rating"
          value={formik.values.rating}
          onChange={formik.handleChange}
        />

        {formik.errors.rating ? (
          <div style={{ color: 'red' }}>{formik.errors.rating}</div>
        ) : null}

        <button type="submit" className={styles.btn} disabled={!formik.isValid}>
          Create product
        </button>
      </form>
      {product && (
        <div>
          <h2>{product.title}</h2>
          <p>{product.author}</p>
          <p>{product.createdAt}</p>
          <p>{product.rating}</p>
        </div>
      )}
    </div>
  )
}

export default CreateProduct
