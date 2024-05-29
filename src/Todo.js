import React,{ useState } from "react"
import { add,del } from "./Actions/Index";
import {useSelector, useDispatch } from "react-redux";
export default function Todo(){
    const [task, settask]= useState('');
    const list = useSelector((state)=>state.Reducers.list);
    const dispatch= useDispatch();
    return(
        <>
        <section >
  <div className="container my-2">
    <div className="row d-flex justify-content-center align-items-center ">
      <div className="col">
        <div
          className="card"
          id="list1"
          style={{ borderRadius: ".75rem", backgroundColor: "#eff1f2" }}
        >
          <div className="card-body py-4 px-4 px-md-5">
            <p className="h1 text-center mt-3 mb-4 pb-3 text-primary">
              <i className="fas fa-check-square me-1" />
              <u>My Todo-App</u>
            </p>
            <div className="pb-2">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-row align-items-center">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="exampleFormControlInput1"
                      placeholder="Add Your Task"
                      value={task}
                      onChange={(e)=>settask(e.target.value)}
                    />
                    <a href="#!" data-mdb-tooltip-init="" title="Set due date">
                      <i className="fas fa-calendar-alt fa-lg me-3" />
                    </a>
                    <div>
                      <button
                        type="button"
                        data-mdb-button-init=""
                        data-mdb-ripple-init=""
                        className="btn btn-primary"
                        onClick={()=>dispatch(add(task),settask(''))}

                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="">
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col">
        <div
          className="card"
          id="list1"
          style={{ borderRadius: ".75rem", backgroundColor: "#eff1f2" }}
        >
          <div className="card-body py-4 px-4 px-md-5">
            {/* <p className="h1 text-center mt-3 mb-4 pb-3 text-primary">
              <i className="fas fa-check-square me-1" />
              <u>My Todo-App</u>
            </p> */}
            <div className="">
              {
                list.map((el,index)=>{
                    return(
                        <div className="d-flex flex-row align-items-center" key={el.id}>
                        <table class="table">
                                <tr>
                                <td scope="row">{index+1}</td>
                                <td>{el.data}</td>
                                
                                </tr>  
                         </table>   
                        <div>
                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={()=>dispatch(del(el.id))}
    
                          >
                            Del
                          </button>
                        </div>
                      </div>
                    )
                   
                })
              }

                  
                

            </div>
            
          
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        
        </>
    )
}