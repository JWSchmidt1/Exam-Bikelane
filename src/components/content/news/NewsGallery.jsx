import React from 'react'
import latestImg from '../../../assets/images/news/bikenews1.jpg'
import { GrFormSearch } from 'react-icons/gr'
import Pagination from '../../Pagination'

const NewsGallery = () => {
  return (
    <div className='newsGalleryCon'>
      <form className="newsSearchCon">
        <input type="search" name="search" className="newsSearch" placeholder="Søg" />
        <button type='submit' className="newsSearchIcon"><GrFormSearch /></button>
      </form>
      <article className='newsLatestCon'>
        <section>
          <p className='newsCreated'>I dag kl. 15:00</p>
          <p className='newsWrittenBy'>Af <span className='newsSurname'>Jacob</span> Jacobsen</p>
          <div className="newsLatestImgCon">
            <img className='newsLatestImg' src={ latestImg } alt={ latestImg } />
          </div>
        </section>
        <section>
          <h2 className='title newsTitle'>Lorem ipsum dolor sit amet.</h2>
          <p className="newsText">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic accusantium itaque officiis sit totam aspernatur accusamus aliquam corporis fugiat, optio aperiam, debitis expedita vitae, consequuntur repellendus? Cum mollitia dolor aut tenetur totam dignissimos labore assumenda minus ipsa excepturi! Nam esse deserunt fugit ipsa omnis nostrum quia facilis, repellat placeat eius, velit iure saepe vitae hic quisquam quibusdam obcaecati commodi vel voluptates eveniet inventore quis? Reprehenderit, qui? Laborum voluptatem repudiandae quos vero omnis placeat sed nemo suscipit autem velit! Facere beatae voluptates fugiat quibusdam natus recusandae veniam totam inventore vero. Iusto veritatis necessitatibus vero eveniet dolor illo ut doloribus labore doloremque.</p>
        </section>
        <button className='btn-second'>Læs mere</button>
      </article>

      <article className='newsGalleryNormal'>
        <section>
          <p className='newsGalleryCreated'>I dag kl. 15:00</p>
          <p className='newsWrittenBy'>Af <span className='newsSurname'>Jacob</span> Jacobsen</p>
          <div className="newsGalleryImgCon">
            <img className='newsGalleryImg' src={ latestImg } alt={ latestImg } />
          </div>
        </section>
        <section>
          <h2 className='title newsGalleryTitle'>Lorem ipsum dolor sit amet.</h2>
          <p className="newsGalleryText">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic accusantium itaque officiis sit totam aspernatur accusamus aliquam corporis fugiat, optio aperiam, debitis expedita vitae, consequuntur repellendus? Cum mollitia dolor aut tenetur totam dignissimos labore assumenda minus ipsa excepturi! Nam esse deserunt fugit ipsa omnis nostrum quia facilis, repellat placeat eius, velit iure saepe vitae hic quisquam quibusdam obcaecati commodi vel voluptates eveniet inventore quis? Reprehenderit, qui? Laborum voluptatem repudiandae quos vero omnis placeat sed nemo suscipit autem velit! Facere beatae voluptates fugiat quibusdam natus recusandae veniam totam inventore vero. Iusto veritatis necessitatibus vero eveniet dolor illo ut doloribus labore doloremque.</p>
        </section>
        <button className='btn-second'>Læs mere</button>
      </article>

      <article className='newsGalleryNormal'>
        <section>
          <p className='newsGalleryCreated'>I dag kl. 15:00</p>
          <p className='newsWrittenBy'>Af <span className='newsSurname'>Jacob</span> Jacobsen</p>
          <div className="newsGalleryImgCon">
            <img className='newsGalleryImg' src={ latestImg } alt={ latestImg } />
          </div>
        </section>
        <section>
          <h2 className='title newsGalleryTitle'>Lorem ipsum dolor sit amet.</h2>
          <p className="newsGalleryText">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic accusantium itaque officiis sit totam aspernatur accusamus aliquam corporis fugiat, optio aperiam, debitis expedita vitae, consequuntur repellendus? Cum mollitia dolor aut tenetur totam dignissimos labore assumenda minus ipsa excepturi! Nam esse deserunt fugit ipsa omnis nostrum quia facilis, repellat placeat eius, velit iure saepe vitae hic quisquam quibusdam obcaecati commodi vel voluptates eveniet inventore quis? Reprehenderit, qui? Laborum voluptatem repudiandae quos vero omnis placeat sed nemo suscipit autem velit! Facere beatae voluptates fugiat quibusdam natus recusandae veniam totam inventore vero. Iusto veritatis necessitatibus vero eveniet dolor illo ut doloribus labore doloremque.</p>
        </section>
        <button className='btn-second'>Læs mere</button>
      </article>

      <article className='newsGalleryNormal'>
        <section>
          <p className='newsGalleryCreated'>I dag kl. 15:00</p>
          <p className='newsWrittenBy'>Af <span className='newsSurname'>Jacob</span> Jacobsen</p>
          <div className="newsGalleryImgCon">
            <img className='newsGalleryImg' src={ latestImg } alt={ latestImg } />
          </div>
        </section>
        <section>
          <h2 className='title newsGalleryTitle'>Lorem ipsum dolor sit amet.</h2>
          <p className="newsGalleryText">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic accusantium itaque officiis sit totam aspernatur accusamus aliquam corporis fugiat, optio aperiam, debitis expedita vitae, consequuntur repellendus? Cum mollitia dolor aut tenetur totam dignissimos labore assumenda minus ipsa excepturi! Nam esse deserunt fugit ipsa omnis nostrum quia facilis, repellat placeat eius, velit iure saepe vitae hic quisquam quibusdam obcaecati commodi vel voluptates eveniet inventore quis? Reprehenderit, qui? Laborum voluptatem repudiandae quos vero omnis placeat sed nemo suscipit autem velit! Facere beatae voluptates fugiat quibusdam natus recusandae veniam totam inventore vero. Iusto veritatis necessitatibus vero eveniet dolor illo ut doloribus labore doloremque.</p>
        </section>
        <button className='btn-second'>Læs mere</button>
      </article>

      <article className='newsGalleryNormal'>
        <section>
          <p className='newsGalleryCreated'>I dag kl. 15:00</p>
          <p className='newsWrittenBy'>Af <span className='newsSurname'>Jacob</span> Jacobsen</p>
          <div className="newsGalleryImgCon">
            <img className='newsGalleryImg' src={ latestImg } alt={ latestImg } />
          </div>
        </section>
        <section>
          <h2 className='title newsGalleryTitle'>Lorem ipsum dolor sit amet.</h2>
          <p className="newsGalleryText">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic accusantium itaque officiis sit totam aspernatur accusamus aliquam corporis fugiat, optio aperiam, debitis expedita vitae, consequuntur repellendus? Cum mollitia dolor aut tenetur totam dignissimos labore assumenda minus ipsa excepturi! Nam esse deserunt fugit ipsa omnis nostrum quia facilis, repellat placeat eius, velit iure saepe vitae hic quisquam quibusdam obcaecati commodi vel voluptates eveniet inventore quis? Reprehenderit, qui? Laborum voluptatem repudiandae quos vero omnis placeat sed nemo suscipit autem velit! Facere beatae voluptates fugiat quibusdam natus recusandae veniam totam inventore vero. Iusto veritatis necessitatibus vero eveniet dolor illo ut doloribus labore doloremque.</p>
        </section>
        <button className='btn-second'>Læs mere</button>
      </article>

      <article className='newsGalleryNormal'>
        <section>
          <p className='newsGalleryCreated'>I dag kl. 15:00</p>
          <p className='newsWrittenBy'>Af <span className='newsSurname'>Jacob</span> Jacobsen</p>
          <div className="newsGalleryImgCon">
            <img className='newsGalleryImg' src={ latestImg } alt={ latestImg } />
          </div>
        </section>
        <section>
          <h2 className='title newsGalleryTitle'>Lorem ipsum dolor sit amet.</h2>
          <p className="newsGalleryText">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic accusantium itaque officiis sit totam aspernatur accusamus aliquam corporis fugiat, optio aperiam, debitis expedita vitae, consequuntur repellendus? Cum mollitia dolor aut tenetur totam dignissimos labore assumenda minus ipsa excepturi! Nam esse deserunt fugit ipsa omnis nostrum quia facilis, repellat placeat eius, velit iure saepe vitae hic quisquam quibusdam obcaecati commodi vel voluptates eveniet inventore quis? Reprehenderit, qui? Laborum voluptatem repudiandae quos vero omnis placeat sed nemo suscipit autem velit! Facere beatae voluptates fugiat quibusdam natus recusandae veniam totam inventore vero. Iusto veritatis necessitatibus vero eveniet dolor illo ut doloribus labore doloremque.</p>
        </section>
        <button className='btn-second'>Læs mere</button>
      </article>

      <article className='newsGalleryNormal'>
        <section>
          <p className='newsGalleryCreated'>I dag kl. 15:00</p>
          <p className='newsWrittenBy'>Af <span className='newsSurname'>Jacob</span> Jacobsen</p>
          <div className="newsGalleryImgCon">
            <img className='newsGalleryImg' src={ latestImg } alt={ latestImg } />
          </div>
        </section>
        <section>
          <h2 className='title newsGalleryTitle'>Lorem ipsum dolor sit amet.</h2>
          <p className="newsGalleryText">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic accusantium itaque officiis sit totam aspernatur accusamus aliquam corporis fugiat, optio aperiam, debitis expedita vitae, consequuntur repellendus? Cum mollitia dolor aut tenetur totam dignissimos labore assumenda minus ipsa excepturi! Nam esse deserunt fugit ipsa omnis nostrum quia facilis, repellat placeat eius, velit iure saepe vitae hic quisquam quibusdam obcaecati commodi vel voluptates eveniet inventore quis? Reprehenderit, qui? Laborum voluptatem repudiandae quos vero omnis placeat sed nemo suscipit autem velit! Facere beatae voluptates fugiat quibusdam natus recusandae veniam totam inventore vero. Iusto veritatis necessitatibus vero eveniet dolor illo ut doloribus labore doloremque.</p>
        </section>
        <button className='btn-second'>Læs mere</button>
      </article>
      <Pagination />
    </div>
  )
}

export default NewsGallery