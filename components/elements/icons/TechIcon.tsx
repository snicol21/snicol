const TechIcon = ({ name, className = "" }) => {
  const getTechIcon = () => {
    switch (name) {
      case "angular":
        return { name: "Angular", ref: "#angular" }
      case "azure":
        return { name: "Azure", ref: "#azure" }
      case "bootstrap":
        return { name: "Bootstrap", ref: "#bootstrap" }
      case "bulma":
        return { name: "Bulma", ref: "#bulma" }
      case "cashmere":
        return { name: "Cashmere", ref: "#cashmere" }
      case "csharp":
        return { name: "CSharp", ref: "#csharp" }
      case "css":
        return { name: "CSS", ref: "#css" }
      case "css3":
        return { name: "CSS3", ref: "#css3" }
      case "d3":
        return { name: "D3", ref: "#d3" }
      case "django":
        return { name: "Django", ref: "#django" }
      case "docker":
        return { name: "Docker", ref: "#docker" }
      case "dot":
        return { name: "Dot", ref: "#dot" }
      case "electron":
        return { name: "Electron", ref: "#electron" }
      case "express":
        return { name: "Express", ref: "#express" }
      case "firebase":
        return { name: "Firebase", ref: "#firebase" }
      case "gatsby":
        return { name: "Gatsby", ref: "#gatsby" }
      case "git":
        return { name: "Git", ref: "#git" }
      case "graphql":
        return { name: "GraphQL", ref: "#graphql" }
      case "gulp":
        return { name: "Gulp", ref: "#gulp" }
      case "html5":
        return { name: "HTML5", ref: "#html5" }
      case "javascript":
        return { name: "Javascript", ref: "#javascript" }
      case "lodash":
        return { name: "Lodash", ref: "#lodash" }
      case "moment":
        return { name: "Moment", ref: "#moment" }
      case "mssql":
        return { name: "MSSQL", ref: "#mssql" }
      case "node":
        return { name: "Node", ref: "#node" }
      case "npm":
        return { name: "NPM", ref: "#npm" }
      case "postgres":
        return { name: "Postgres", ref: "#postgres" }
      case "powershell":
        return { name: "PowerShell", ref: "#powershell" }
      case "python":
        return { name: "Python", ref: "#python" }
      case "qlik":
        return { name: "Qlik", ref: "#qlik" }
      case "raspberrypi":
        return { name: "Raspberry Pi", ref: "#raspberrypi" }
      case "react":
        return { name: "React", ref: "#react" }
      case "redux":
        return { name: "Redux", ref: "#redux" }
      case "sass":
        return { name: "Sass", ref: "#sass" }
      case "tailwind":
        return { name: "Tailwind", ref: "#tailwind" }
      case "typescript":
        return { name: "Typescript", ref: "#typescript" }
      case "yaml":
        return { name: "YAML", ref: "#yaml" }
      default:
        return { name: name, class: "" }
    }
  }

  return (
    <>
      <div>
        <svg className={className}>
          <use xlinkHref={`/images/sprite.svg${getTechIcon().ref}`}></use>
        </svg>
      </div>
      {getTechIcon().name}
    </>
  )
}
export default TechIcon
