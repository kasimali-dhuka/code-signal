function findEmailDomain($address) {
    $split_add = explode('@', $address);
    $domain = end($split_add);
    return $domain;
}
