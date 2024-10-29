<?php

namespace Traits;

// Disimulasikakn ini train untuk formatter json response
trait ResponseFormatter {
    public function responseFormatter($code, $message, $data = null){
        return json_encode(value: [
            "code" => $code,
            "message" => $message,
            "data" => $data
        ]);
    }
}
?>

