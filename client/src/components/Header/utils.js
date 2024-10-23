import {Link} from '@/navigation';

export const renderNestedMenu = (children) => {
  if(!children.data || !children.data.length) {
    return [];
  }

  const nested = children.data.map(item => {
    const data = item.attributes;
    
    return (
      <li className="nested-menu-item" key={item.id}>
        <Link href={data.url}>
          {data.title}
        </Link>
      </li>
    )
  });

  return (
    <div className="nested-menu-container">
      <ul className="nested-menu-list">
        {nested}
      </ul>
    </div>
  )
}