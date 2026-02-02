import { createTaskBtn, createTaskBtnDiv, createTaskChildDiv, createTaskFormClass, createTaskInputClass, createTaskLabelClass, createTaskLabelDesc, createTaskMainDiv, createTaskTextArea, createTaskTextAreaDiv } from "../../constants/imports";

const CreateTask = () => {

    return (
        <div className={createTaskMainDiv}>
            <form className={createTaskFormClass}>

                <div className={createTaskChildDiv}>
                    <div>
                        <label className={createTaskLabelClass}> Task Title </label>
                        <input type="text" placeholder="Design dashboard UI" className={createTaskInputClass} />
                    </div>

                    <div>
                        <label className={createTaskLabelClass}> Due Date </label>
                        <input type="date" className={createTaskInputClass} />
                    </div>

                    <div>
                        <label className={createTaskLabelClass}> Assign To </label>
                        <input type="text" placeholder="Employee name" className={createTaskInputClass} />
                    </div>

                    <div>
                        <label className={createTaskLabelClass}> Category </label>
                        <input type="text" placeholder="Design, Development" className={createTaskInputClass} />
                    </div>
                </div>

                <div className={createTaskTextAreaDiv}>
                    <label className={createTaskLabelDesc}> Description </label>
                    <textarea rows="12" placeholder="Describe the task clearly so the employee understands expectations..." className={createTaskTextArea} />
                </div>

                <div className={createTaskBtnDiv}>
                    <button className={createTaskBtn}> Create Task </button>
                </div>

            </form>
        </div>
    )
}

export default CreateTask;