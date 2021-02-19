'use strict';

togglbutton.render('#issue-header:not(.toggl)', {}, function (elem) {
  let description;
  const numElem = $('.issue-id');
  const titleElem = $('#issue-title');
  const projectElem = $('.entity-name');

  description = titleElem.textContent;
  if (numElem !== null) {
    description = numElem.textContent.trim() + ' ' + description;
  }

  const link = togglbutton.createTimerLink({
    className: 'bitbucket',
    description: description,
    projectName: projectElem && projectElem.textContent.trim()
  });

  $('#issue-header').appendChild(link);
});

<<<<<<< HEAD
togglbutton.render('#pull-request-header', {}, function (elem) {
  var link, description,
    numElem = $('.pull-request-self-link'),
    titleElem = $('.pull-request-title'),
    projectElem = $('.repo-link');

  description = titleElem.innerText;
  if (numElem !== null) {
    description = numElem.innerText + " " + description;
  }

  link = togglbutton.createTimerLink({
    className: 'bitbucket',
    description: description,
    projectName: projectElem && projectElem.textContent
  });

  $('.compare-widget-container').insertBefore(link, $('#branch-details-template'));
=======
togglbutton.render('#pull-request-header:not(.toggl)', {}, function (elem) {
  let description;
  const numElem = $('.pull-request-self-link');
  const titleElem = $('.pull-request-title');
  const projectElem = $('.entity-name');
  let parentToAppendTo = '.pull-request-status';

  if (titleElem !== null) {
    description = titleElem.textContent.trim();
    if (numElem !== null) {
      description = numElem.textContent.trim() + ' ' + description;
    }
  } else {
    // Bitbucket Server support as at version v5.9.0
    description = $('.pr-title-jira-issues-trigger').closest('h2').textContent;
    parentToAppendTo = '.pull-request-metadata';
  }

  const link = togglbutton.createTimerLink({
    className: 'bitbucket',
    description: description,
    projectName: projectElem && projectElem.textContent.trim()
  });

  $(parentToAppendTo).appendChild(link);
>>>>>>> ff5bf97ffa57ec0d3fe12b18458b44435848acda
});
