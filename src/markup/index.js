export function markupUSers(users) {
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

export function murkupByUserId({id, name, username, website, phone, company, email, address}){
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
`
}

