// GLOBAL CUSTOM COMPONENTS
import ListItemLink from 'components/reuseable/links/ListItemLink';
import DropdownToggleLink from 'components/reuseable/links/DropdownToggleLink';

export default function MediaNavItem() {
  const mediaNavigation = [
    { id: 1, url: 'https://slategray-tapir-928038.hostingersite.com/wp-content/uploads/2025/07/Brochure-Design.pdf', title: 'Download' },
  ];

  const mediaMblNavigation = [
    { id: 1, url: '/media', title: 'Overview' },

    { id: 2, url: 'https://slategray-tapir-928038.hostingersite.com/wp-content/uploads/2025/07/Brochure-Design.pdf', title: 'Download' },
  ];
  return (
    <li className='nav-item dropdown'>
      <DropdownToggleLink
        title='Media'
        className='nav-link text-blue dropdown-toggle d-block d-lg-none'
      />
      <a
        href='media'
        className='nav-link text-blue dropdown-toggle  d-none d-lg-block'
      >
        Media
      </a>

      <ul className='dropdown-menu d-none d-lg-block p-0'>
        {mediaNavigation.map(({ id, url, title }) => {
          const openInNewTab = id === 1;
          return (
            <ListItemLink
              key={id}
              href={url}
              title={title}
              linkClassName="dropdown-item px-2 py-2 text-center"
              openInNewTab={openInNewTab}
            />
          );
        })}
      </ul>
      

      <ul className='dropdown-menu d-block d-lg-none'>
        {mediaMblNavigation.map(({ id, url, title }) => {
           const openInNewTab = id === 2;
          return (
            <ListItemLink
              key={id}
              href={url}
              title={title}
              linkClassName='dropdown-item'
               openInNewTab={openInNewTab}
            />
          );
        })}
      </ul>
    </li>
  );
}
