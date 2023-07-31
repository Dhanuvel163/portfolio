import { skill } from "@/types/skill"

function Skillscard({
    title, skills
}:{
    title: string, skills: skill[]
}){
    return(
        <div className='rounded mt-4 border border-[#e5e7eb] shadow transform transition hover:scale-[1.05] hover:z-10 relative duration-300'>
            <h3 className='font-bold text-xl text-[black] px-2 py-1 rounded border-b border-[#e5e7eb] border-solid'>{title}</h3>
            <div className="flex flex-wrap justify-center gap-2 p-2">
                {
                    skills.map((skill)=>(
                        <div className={`text-4xl ${skill.class} group relative flex flex-col items-center`} key={skill.title}>
                            <skill.icon/>
                            <div className="absolute top-6 mt-6 hidden flex-col items-center group-hover:flex z-10">
                                <div className="-mb-2 h-3 w-3 rotate-45 bg-[black]"></div>
                                <span className="whitespace-no-wrap relative z-10 bg-[black] p-2 text-xs leading-none text-[white] shadow-lg rounded min-w-max">{skill.title}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Skillscard;