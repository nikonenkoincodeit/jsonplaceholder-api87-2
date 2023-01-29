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
