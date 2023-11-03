import React from 'react'
import {BsArrowLeft, BsArrowRight} from 'react-icons/bs'

const Pagination = () => {
    return (
        <div className="pagination">
            <a className='leftBorder' href="#"><BsArrowLeft className='paginationIcon' /></a>
            <a href="#" class="active">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a className='rightBorder' href="#"><BsArrowRight /></a>
        </div>
    )
}

export default Pagination