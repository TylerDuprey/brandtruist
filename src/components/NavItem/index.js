const NavItem = ({slug, title, content}) => {
  return (
    <a href={`#${slug}`} title={title}>
        {content}
    </a>
  )
}

export default NavItem