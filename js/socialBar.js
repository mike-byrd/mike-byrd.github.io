function SocialBar()
{  
  var _root;
  
  var ui = {
    socialbuttons: '#social-buttons-container li'
  }
  
  this.Init = function(root)
  {
    _root = root;
    InitializeUIElements(ui, root);
    
    ui.socialbuttons.click(OnSocialButtonClicked);
  }
  
  function OnSocialButtonClicked(e)
  {
    switch (e.target.id) {
      case 'btn-social-facebook':
        window.open('https://www.facebook.com/mikecbyrdjr', '_blank');
        break;
      case 'btn-social-twitter':
        window.open('https://twitter.com/mikecbyrd', '_blank');
        break;
      case 'btn-social-linkedin':
        window.open('https://www.linkedin.com/in/mikecbyrdjr', '_blank');
        break;
    }
  }
}