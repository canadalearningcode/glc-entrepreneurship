

(function(globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    var v=(n > 1);
    if (typeof(v) == 'boolean') {
      return v ? 1 : 0;
    } else {
      return v;
    }
  };
  

  /* gettext library */

  django.catalog = django.catalog || {};
  
  var newcatalog = {
    "%(sentDate)s by %(user)s": "%(sentDate)s par %(user)s", 
    "A newer version of this article has been published since this draft was saved. You can restore the draft to view the content, but you will not be able to submit it for publishing.": "Une version plus r\u00e9cente de cet article a \u00e9t\u00e9 publi\u00e9e depuis l'enregistrement du brouillon. Vous pouvez restaurer le contenu de ce brouillon afin d'en voir le contenu mais vous ne pourrez pas le publier.", 
    "Article Title Lookup / Link Text": "Recherche d'article par titre / texte du lien", 
    "Aspect ratio": "Facteur de forme", 
    "Attachments": "Pi\u00e8ces jointes", 
    "Autosave enabled.": "Sauvegarde automatique activ\u00e9e.", 
    "CSS": "CSS", 
    "Changes saved.": "Modifications enregistr\u00e9es.", 
    "Close": "Fermer", 
    "Close notification": "Fermer la notification", 
    "Close submenu": "Fermer le sous-menu", 
    "Compare this date to the latest revision date to ensure you're not overwriting later changes.": "Veuillez comparer cette date avec la date de la derni\u00e8re r\u00e9vision afin de vous assurer que vous n'\u00e9crasez pas de modifications interm\u00e9diaires.", 
    "Create a Redirect": "Cr\u00e9er une redirection", 
    "Default": "Par d\u00e9faut", 
    "Details": "D\u00e9tails", 
    "Discard draft.": "Supprimer le brouillon.", 
    "Document": "Document", 
    "Draft autosaved:": "Brouillon enregistr\u00e9 automatiquement :", 
    "Draft discarded.": "Brouillon supprim\u00e9.", 
    "Draft discarded:": "Brouillon supprim\u00e9 :", 
    "Draft published:": "Brouillon publi\u00e9 :", 
    "Draft restored.": "Brouillon restaur\u00e9.", 
    "Edit Page": "\u00c9diter la page", 
    "Embed YouTube Video": "Int\u00e9grer une vid\u00e9o YouTube", 
    "Error loading content, please refresh the page": "Erreur lors du chargement de la page, vous pouvez actualiser la page", 
    "Error submitting as %(type)s": "Erreur lors de l'envoi en tant que %(type)s", 
    "HTML": "HTML", 
    "Hang on! Updating filters\u2026": "Patience\u2026 Mise \u00e0 jour des filtres\u2026", 
    "History": "Historique", 
    "Insert Code Sample Template": "Ins\u00e9rer un mod\u00e8le d'exemple de code", 
    "Insert Code Sample iFrame": "Ins\u00e9rer une iFrame pour une exemple de code", 
    "JavaScript": "JavaScript", 
    "Launch": "Lancer", 
    "Link": "Lien", 
    "Locate a YouTube Video": "D\u00e9terminer l'emplacement de la vid\u00e9o YouTube", 
    "MDN Redirect": "Redirection MDN", 
    "Never": "Jamais", 
    "New interest...": "Nouvel int\u00e9r\u00eat\u2026", 
    "New tag...": "Nouvelle \u00e9tiquette\u2026", 
    "No": "Non", 
    "No Highlight": "Pas de coloration", 
    "No attachments available": "Aucune pi\u00e8ce jointe disponible", 
    "No selection": "Aucune s\u00e9lection", 
    "Open": "Ouvrir", 
    "Open implementation notes": "Ouvrir les notes d'impl\u00e9mentation", 
    "Open in %(site)s": "Ouvrir dans %(site)s", 
    "Paste YouTube Video URL": "Copier l'URL d'une vid\u00e9o YouTube", 
    "Published version": "Version publi\u00e9e", 
    "Publishing changes\u2026": "Publication des modifications\u2026", 
    "Publishing failed. Please copy and paste your changes into a safe place and try submitting the form using the \"Publish\" button.": "La publication a \u00e9chou\u00e9. Veuillez copier-coller vos modifications dans un endroit s\u00fbr et essayer de soumettre le formulaire en utilisant le bouton \u00ab Publier \u00bb.", 
    "Publishing failed. You are not currently signed in. Please use a new tab to sign in and try publishing again.": "\u00c9chec de la publication. Vous n\u2019\u00eates pas connect\u00e9-e actuellement. Veuillez ouvrir un nouvel onglet afin de vous connecter puis essayez de publier \u00e0 nouveau.", 
    "Restore draft.": "Restaurer le brouillon.", 
    "Result": "R\u00e9sultat", 
    "Return to compatibility table.": "Revenir au tableau de compatibilit\u00e9.", 
    "Revert": "Annuler la modification", 
    "Revision history.": "Historique des r\u00e9visions.", 
    "Sample CSS Content": "Contenu CSS de l'exemple", 
    "Sample Finder": "Explorateur d'exemples", 
    "Sample HTML Content": "Contenu HTML de l'exemple", 
    "Sample JavaScript Content": "Contenu JavaScript de l'exemple", 
    "Search Stack Overflow": "Rechercher sur Stack Overflow", 
    "Section": "Section", 
    "Sections in Document": "Sections du document", 
    "Select a section": "S\u00e9lectionner une section", 
    "Select an attachment": "S\u00e9lectionner une pi\u00e8ce jointe", 
    "Selected: ": "S\u00e9lectionn\u00e9 : ", 
    "Submitted as %(submissionType)s": "Envoy\u00e9 en tant que %(submissionType)s", 
    "Submitting...": "Envoi en cours\u2026", 
    "Syntax Highlighter": "Coloration syntaxique", 
    "The URL you've entered doesn't appear to be valid": "L'URL saisie ne semble pas \u00eatre valide", 
    "URL": "URL", 
    "Updated filters.": "Filtres mis \u00e0 jour.", 
    "View Page": "Voir la page", 
    "View draft.": "Voir le brouillon.", 
    "Viewing old draft. This draft cannot be published.": "Visualisation d'un ancien brouillon. Ce brouillon ne peut pas \u00eatre publi\u00e9.", 
    "What should the sample title be?": "Quel doit \u00eatre le titre de cet exemple ?", 
    "Would you answer 4 questions for us? <a %(url)s>Open the survey in a new tab</a> and fill it out when you are done on the site. Thanks!": "Pourriez-vous r\u00e9pondre \u00e0 4 questions pour nous aider ? <a %(url)s>Ouvrez le sondage dans un nouvel onglet</a> et remplissez-le \u00e0 la fin de votre visite sur le site. Merci d'avance !", 
    "Yes": "Oui", 
    "You are now viewing this site in %(localeName)s. Do you always want to view this site in %(localeName)s?": "Ce site est d\u00e9sormais affich\u00e9 en %(localeName)s. Souhaitez-vous toujours consulter ce site en %(localeName)s\u00a0?", 
    "You have a draft from: %(time)s.": "Vous avez un brouillon en date du : %(time)s.", 
    "You must input a valid YouTube video URL.": "Vous devez saisir une URL valide pour une vid\u00e9o YouTube.", 
    "Your browser does not support MathML. A CSS fallback has been used instead.": "Votre navigateur ne supporte pas MathML. Un contenu de remplacement avec CSS a \u00e9t\u00e9 utilis\u00e9.", 
    "an unknown date": "une date inconnue"
  };
  for (var key in newcatalog) {
    django.catalog[key] = newcatalog[key];
  }
  

  if (!django.jsi18n_initialized) {
    django.gettext = function(msgid) {
      var value = django.catalog[msgid];
      if (typeof(value) == 'undefined') {
        return msgid;
      } else {
        return (typeof(value) == 'string') ? value : value[0];
      }
    };

    django.ngettext = function(singular, plural, count) {
      var value = django.catalog[singular];
      if (typeof(value) == 'undefined') {
        return (count == 1) ? singular : plural;
      } else {
        return value[django.pluralidx(count)];
      }
    };

    django.gettext_noop = function(msgid) { return msgid; };

    django.pgettext = function(context, msgid) {
      var value = django.gettext(context + '\x04' + msgid);
      if (value.indexOf('\x04') != -1) {
        value = msgid;
      }
      return value;
    };

    django.npgettext = function(context, singular, plural, count) {
      var value = django.ngettext(context + '\x04' + singular, context + '\x04' + plural, count);
      if (value.indexOf('\x04') != -1) {
        value = django.ngettext(singular, plural, count);
      }
      return value;
    };

    django.interpolate = function(fmt, obj, named) {
      if (named) {
        return fmt.replace(/%\(\w+\)s/g, function(match){return String(obj[match.slice(2,-2)])});
      } else {
        return fmt.replace(/%s/g, function(match){return String(obj.shift())});
      }
    };


    /* formatting library */

    django.formats = {
    "DATETIME_FORMAT": "j F Y H:i", 
    "DATETIME_INPUT_FORMATS": [
      "%d/%m/%Y %H:%M:%S", 
      "%d/%m/%Y %H:%M:%S.%f", 
      "%d/%m/%Y %H:%M", 
      "%d/%m/%Y", 
      "%d.%m.%Y %H:%M:%S", 
      "%d.%m.%Y %H:%M:%S.%f", 
      "%d.%m.%Y %H:%M", 
      "%d.%m.%Y", 
      "%Y-%m-%d %H:%M:%S", 
      "%Y-%m-%d %H:%M:%S.%f", 
      "%Y-%m-%d %H:%M", 
      "%Y-%m-%d"
    ], 
    "DATE_FORMAT": "j F Y", 
    "DATE_INPUT_FORMATS": [
      "%d/%m/%Y", 
      "%d/%m/%y", 
      "%d.%m.%Y", 
      "%d.%m.%y", 
      "%Y-%m-%d"
    ], 
    "DECIMAL_SEPARATOR": ",", 
    "FIRST_DAY_OF_WEEK": "1", 
    "MONTH_DAY_FORMAT": "j F", 
    "NUMBER_GROUPING": "3", 
    "SHORT_DATETIME_FORMAT": "j N Y H:i", 
    "SHORT_DATE_FORMAT": "j N Y", 
    "THOUSAND_SEPARATOR": "\u00a0", 
    "TIME_FORMAT": "H:i", 
    "TIME_INPUT_FORMATS": [
      "%H:%M:%S", 
      "%H:%M:%S.%f", 
      "%H:%M"
    ], 
    "YEAR_MONTH_FORMAT": "F Y"
  };

    django.get_format = function(format_type) {
      var value = django.formats[format_type];
      if (typeof(value) == 'undefined') {
        return format_type;
      } else {
        return value;
      }
    };

    /* add to global namespace */
    globals.pluralidx = django.pluralidx;
    globals.gettext = django.gettext;
    globals.ngettext = django.ngettext;
    globals.gettext_noop = django.gettext_noop;
    globals.pgettext = django.pgettext;
    globals.npgettext = django.npgettext;
    globals.interpolate = django.interpolate;
    globals.get_format = django.get_format;

    django.jsi18n_initialized = true;
  }

}(this));

