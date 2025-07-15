<?php

header("Access-Control-Allow-Origin: *");

include('db-connect.php');

$sql = "SELECT wp_posts.id,
        wp_posts.post_title,
        wp_posts.post_name,
        wp_posts.post_date,
        wp_posts.post_content,
        wp_posts.post_excerpt,
       (SELECT pm.meta_value
        FROM    wp_postmeta as pm
        WHERE   pm.post_id = wp_postmeta.meta_value AND pm.meta_key = '_wp_attached_file') AS image
        FROM    wp_posts,
                wp_postmeta
        WHERE   wp_posts.post_status = 'publish'
            AND wp_posts.post_type = 'post'
            AND wp_postmeta.post_id = wp_posts.id
            AND wp_postmeta.meta_key = '_thumbnail_id'
        ORDER  BY wp_posts.post_date DESC";

$result = mysqli_query($conn, $sql);

$output = array();

if (mysqli_num_rows($result) > 0) {
    // output data of each row
    while($row = mysqli_fetch_assoc($result)) {

        $cls_date = new DateTime($row["post_date"]);

        if ( !empty($row['post_excerpt']) ) {
            $excerpt = substr(strip_tags($row['post_excerpt']), 0, 200). "...";
        } else { 
            $excerpt = substr(strip_tags($row['post_content']), 0, 200). "...";
        }
        
        $output[] = array( 
            "id" => $row["id"],
            "title" => html_entity_decode($row["post_title"],ENT_QUOTES,'UTF-8'),
            "url" => $row["post_name"],
            "description" => html_entity_decode($excerpt,ENT_QUOTES,'UTF-8'),
            "date" => $cls_date->format('F d, Y'),
            "image" => $row['image']
        );

    }
}

echo json_encode( $output );

?>