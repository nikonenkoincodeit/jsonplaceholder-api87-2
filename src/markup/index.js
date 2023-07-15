export function markupUsers(users) {
  return users
    .map(({ id, name, username, email, website }, index) => {
      return `<tr class='js-tr' data-userid="${id}">
            <th scope="row">${index + 1}</th>
            <td>${name}</td>
            <td>${username}</td>
            <td>${email}</td>
            <td>${website}</td>
          </tr>`;
    })
    .join("");
}

export function murkupByUserId({
  id,
  name,
  username,
  website,
  phone,
  company,
  email,
  address,
}) {
  return `
<tr data-userid="${id}">
            <th scope="row">1</th>
            <td>${name}</td>
            <td>${username}</td>
            <td>${email}</td>
            <td>${address.street}h</td>
            <td>${phone}</td>
            <td>${website}</td>
            <td>${company.name}</td>
          </tr>
`;
}

export function createListAlbum(albums = []) {
  return albums
    .map(({ title, id }) => {
      return `<li class="list-group-item d-flex justify-content-between align-items-start js-list-user-album" data-id='${id}'>
          <div class="ms-2 me-auto">
            <div class="fw-bold">${title}</div>
          </div>
          <span class="badge bg-primary rounded-pill">rat</span>
        </li>`;
    })
    .join("");
}

export function createCardMarkup(cards) {
  return cards
    .map(({ id, thumbnailUrl, title } = []) => {
      return `
          <div class="card" data-set="${id}">
        <img class="bd-placeholder-img card-img-top" width="200" height="200"
          src="${thumbnailUrl}" alt="accusamus beatae ad facilis cum similique qui sunt" />
        <div class="card-body">
          <p class="card-text">
            ${title}
          </p>
        </div>
      </div>
    `;
    })
    .join("");
}
