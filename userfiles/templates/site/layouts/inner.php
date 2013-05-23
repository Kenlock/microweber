<?php
/*

type: layout
content_type: post
name: Post inner

description: Post inner layout

*/
?>
<?php include THIS_TEMPLATE_DIR. "header.php"; ?> 

<div class="container">
  <div class="row">
    <div class="span8">
      <h3 class="edit" field="title" rel="content">Page Title</h3>
      <div class="edit"  field="content" rel="content">
        <div class="clearfix post-comments">
          <module data-type="pictures" data-template="slider" data-content-id="<?php print CONTENT_ID; ?>"  />
        </div>
  
          <div class="element" style="width:95%">
            <p align="justify">This text is set by default and is suitable for edit in real time. By default the drag and drop core feature will allow you to position it anywhere on the site. Get creative, Make Web.</p>
          </div>
    
        
          <div class="element">
            <hr class="visible-desktop column-hr">
          </div>
        <module data-type="comments" data-template="default" data-content-id="<?php print CONTENT_ID; ?>"  />
      </div>

    </div>
    <div class="span3 offset1">
      <?php include THIS_TEMPLATE_DIR. "layouts/blog_sidebar.php"; ?>
    </div>
  </div>
</div>
<?php include   TEMPLATE_DIR.  "footer.php"; ?>
